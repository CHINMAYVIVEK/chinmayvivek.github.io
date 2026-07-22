type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
}: SectionHeaderProps) {
  return (
    <header className="site-section-header site-section-header--center">
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
