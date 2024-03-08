const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="confMessage">
        {message}
      </div>
    )
  }


  export default Notification