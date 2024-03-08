import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export function HeadTag({ title, description, children, hideOGDescription, hideOgTitle }) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {!hideOGDescription && description && (
        <meta property="og:description" content={description} />
      )}
      {!hideOgTitle && title && <meta property="og:title" content={title} />}
      {children && children}
    </Helmet>
  );
}
HeadTag.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  hideOGDescription: PropTypes.string,
  hideOgTitle: PropTypes.string,
  children: PropTypes.any,
};

export default HeadTag;
