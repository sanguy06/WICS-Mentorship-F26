import "./WoodButton.css";

/**
 * Shared wooden RPG-style action button (Navbar Play, Hero Play Now, Forest Play Game).
 *
 * It renders a plain <a> link on purpose: same-page links such as href="#game"
 * scroll smoothly thanks to `scroll-behavior: smooth` in index.css, so we need
 * no router and no JavaScript scrolling code.
 *
 * size: "sm" | "md" | "lg"
 */
function WoodButton({ href, size = "md", className = "", children, ...props }) {
  const classes = ["wood-btn", `wood-btn--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}

export default WoodButton;
