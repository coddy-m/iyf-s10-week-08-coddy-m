import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

function PageLayout({ children, sidebar = null }) {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        {sidebar && <aside className="sidebar">{sidebar}</aside>}
        <main className="main-content">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout