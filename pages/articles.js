import axios from "axios";
import Link from "next/link";

function articles(props) {
  console.log(props);
  let articles = props.article.map(({title, listingDescription, url}) =><li key = {title}> <h3><Link href = {url}> {title}</Link></h3><ul><li key = {listingDescription}>{listingDescription}</li></ul></li>)
    let articlesList = articles.map((current,index) => <ul key = {index}>{current}</ul>)
 // const list = props.article.map((item) => {
 //   return (
 //     <li key={item.id}>
 //       <Link href={item.url}><h4>{item.title}</h4></Link>
 //       <ul>
 //         <li key={item.id + "-description"}>{item.listingDescription}</li>
 //       </ul>
 //     </li>
 //   );
 // });

  return (
    <div>
    <h2 style={{textAlign: "center"}}>Articles About Parks</h2>
  <div>{articlesList}</div>
  </div>
  );
}

export async function getStaticProps() {
  const { data: article } = await axios.get(
    "http://localhost:3014/api/articles"
  );
  return {
    props: {
      article,
    },
  };
}

export default articles;
