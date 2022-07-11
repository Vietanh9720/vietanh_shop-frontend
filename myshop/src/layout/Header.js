const Header = () => {
  return (
    // <div className="header">
    //   <div style={{paddingTop : "5px"}}>
    //     <a className="menu-tasbar" href="/home">Trang chủ | </a>{" "}
    //     <a style={{fontSize:"40px",color : 'rgb(11, 12, 12)'}} href="/admin">Admin Page | </a>
    //     <a style={{fontSize:"40px",color : 'rgb(11, 12, 12)'}} href="/login">Login</a>
    //   </div>

    // </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a href="/" class="navbar-brand" style={{ color: "white" }}>
          VAS
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
            <a
              href="/"
              class="nav-item nav-link active"
              style={{ color: "white" }}
            >
              Trang chủ
            </a>
            <a
              href="/admin"
              class="nav-item nav-link"
              style={{ color: "white" }}
            >
              Admin Page
            </a>
            <a
              href="/nopage"
              class="nav-item nav-link"
              style={{ color: "white" }}
            >
              Giỏ hàng
            </a>
            <a
              href="#"
              class="nav-item nav-link disabled"
              tabindex="-1"
              style={{ color: "white" }}
            >
              Báo cáo
            </a>
          </div>
          <div class="navbar-nav ms-auto">
            <a
              href="/login"
              class="nav-item nav-link"
              style={{ color: "white" }}
            >
              Đăng nhập/Đăng ký
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
