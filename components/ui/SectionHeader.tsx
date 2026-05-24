type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "site-section-header--center" : "site-section-header--left";

  return (
    <header className={`site-section-header ${alignClass} ${className}`}>
      <div className="site-eyebrow">
        <span className="site-eyebrow__line" aria-hidden />
        <span>{eyebrow}</span>
      </div>
      <h2 className="site-heading font-display">
        {title}
        {titleAccent ? (
          <>
            {" "}
            <span className="site-heading__accent">{titleAccent}</span>
          </>
        ) : null}
      </h2>
      {description ? <p className="site-section-header__desc">{description}</p> : null}
    </header>
  );
}
