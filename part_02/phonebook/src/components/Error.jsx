const Error = ({ errorMessage }) => {
    if (errorMessage === null) {
      return null
    }
  
    return (
      <div className="errorMessage">
        {errorMessage}
      </div>
    )
  }


  export default Error