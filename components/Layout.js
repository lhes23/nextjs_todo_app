import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      ></script>
    </div>
  );
};
export default Layout;
