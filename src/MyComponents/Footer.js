import React from 'react'

export const Footer = () => {
  const footerstyle =
  {
    position: "relative",
    top: "94.9vh",
    width: "100%",
    backgroundImage: " linear-gradient(to left, #30cfd0 0%, #330867 100%)"


  }
  return (
    <footer className=' text-center py-2 text-white' style={footerstyle}>copyright &copy; MyTodoList.com</footer>)
}
