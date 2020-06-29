import { styled } from "linaria/react";

const Icon = styled(({ title, link, ...props }) => {
  return (
    <svg {...props}>
      {title && <title>{title}</title>}
      {link && <use xlinkHref={link} />}
    </svg>
  );
})`
  vertical-align: middle;
  margin-inline-start: 5px;
  margin-inline-end: 5px;
`;

export default Icon;
