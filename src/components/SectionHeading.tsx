"use client";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  classname?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  classname,
}: SectionHeadingProps) => {
  return (
    <div className={`max-w-xl mx-auto mb-6 text-center ${classname}`}>
      <h2 className="text-beige-800 mb-2">{title}</h2>
      <p className="text-beige-700">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
