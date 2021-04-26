import SearchResultStyle from "./search-results.module.css";
import Content from "./content/content";

export default function Nav(props) {
  return (
    <div className={SearchResultStyle.gridContainer}>
      {props.content
        .filter((cont) => {
          if (props.searchTerm === "") {
            return cont;
          } else if (
            cont.title.toLowerCase().includes(props.searchTerm.toLowerCase())
          ) {
            return cont;
          }
        })
        .map(({ title, slug, service, serviceLogo, thumbnailSrc }, index) => (
          <Content
            key={index}
            link={`/series/${slug}`}
            alt={title}
            src={thumbnailSrc}
            serviceSrc={serviceLogo}
            serviceAlt={service}
            history={props.history}
            subscriptions={props.subscriptions}
          />
        ))}
    </div>
  );
}
