const Header = () => {
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

            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page">
                Iphone
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page">
                Ipad
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page">
                Mac
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page">
                AirPods
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page">
                Watch
              </a>
            </li>
            <li class="nav-item">
              <a href="/admin" class="nav-link active" aria-current="page">
                AdminPage
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
