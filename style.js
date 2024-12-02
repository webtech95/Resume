function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
  document.body.classList.toggle('sidebar-open');  // To shift content when sidebar is open
}