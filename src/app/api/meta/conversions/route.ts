import { NextRequest, NextResponse } from "next/server";

const DEFAULT_META_API_VERSION = "v21.0";

type MetaUserData = {
  fbp?: string;
  fbc?: string;
};

type MetaRequestBody = {
  eventName: string;
  eventId?: string;
  eventSourceUrl?: string;
  testEventCode?: string;
  customData?: Record<string, unknown>;
  userData?: MetaUserData;
};

export async function POST(request: NextRequest) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;
  const apiVersion = process.env.META_API_VERSION ?? DEFAULT_META_API_VERSION;

  if (!pixelId || !accessToken) {
    return NextResponse.json(
      { error: "Meta Conversions API is not configured." },
      { status: 500 },
    );
  }

  let body: MetaRequestBody;

  try {
    body = (await request.json()) as MetaRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  if (!body.eventName) {
    return NextResponse.json(
      { error: "eventName is required." },
      { status: 400 },
    );
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp = forwardedFor?.split(",")[0]?.trim();
  const userAgent = request.headers.get("user-agent") ?? undefined;

  const eventPayload = {
    event_name: body.eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: body.eventId,
    event_source_url: body.eventSourceUrl,
    action_source: "website",
    custom_data: body.customData,
    user_data: {
      client_ip_address: clientIp,
      client_user_agent: userAgent,
      fbp: body.userData?.fbp,
      fbc: body.userData?.fbc,
    },
  };

  try {
    const metaResponse = await fetch(
      `https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [eventPayload],
          ...(body.testEventCode ? { test_event_code: body.testEventCode } : {}),
        }),
      },
    );

    const data = (await metaResponse.json()) as Record<string, unknown>;

    if (!metaResponse.ok) {
      return NextResponse.json(
        {
          error: "Meta request failed.",
          details: data,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, meta: data }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Unexpected error while sending event to Meta." },
      { status: 500 },
    );
  }
}
