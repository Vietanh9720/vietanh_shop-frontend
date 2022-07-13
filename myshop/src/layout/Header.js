const Header = () => {
  const isAdmin = localStorage.getItem("role");
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        {/* <a href="/" class="navbar-brand" style={{ color: "white" }}>
          VAS
        </a> */}
        <div
          class="collapse navbar-collapse justify-content-md-center"
          id="navbarCollapse"
        >
          <ul class="navbar-nav">
            <div>
              <li class="nav-item">
                <a href="/" class="nav-link active" aria-current="page">
                  VAS
                </a>
              </li>
            </div>
            <span style={{marginLeft : "25px"}}></span>
            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <span style={{marginLeft : "25px"}}></span>
            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page">
                Iphone
              </a>
            </li>
            <span style={{marginLeft : "25px"}}></span>
            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page">
                Ipad
              </a>
            </li>
            <span style={{marginLeft : "25px"}}></span>
            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page">
                Mac
              </a>
            </li>
            <span style={{marginLeft : "25px"}}></span>
            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page">
                AirPods
              </a>
            </li>
            <span style={{marginLeft : "25px"}}></span>
            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page">
                Watch
              </a>
            </li>
            <span style={{marginLeft : "25px"}}></span>
            {isAdmin == "admin" ? (
              <li class="nav-item">
                <a href="/admin" class="nav-link active" aria-current="page">
                  AdminPage
                </a>
              </li>
              
            ) : (
              <div></div>
            )}
          </ul>
        </div>
      </div>
      <a
        style={{
          color: "white",
          marginRight: "10px",
          textDecorationLine: "none",
        }}
        href="/login"
      >
        <>Login</>
      </a>
    </nav>
  );
};
export default Header;
