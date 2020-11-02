import { Alert } from "react-bootstrap"

const renderAlert = (variant, message) => {
  return (
    <Alert variant={variant}>
      {message}
    </Alert>
  )
}

const getAvatar = (avatar) => {
  const NO_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';
  return avatar ? avatar : NO_IMAGE;
}

const getDisplayName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
}

const renderLoading = (loading) => {
  return loading ? (
    <img src={"https://miro.medium.com/max/1600/1*CsJ05WEGfunYMLGfsT2sXA.gif"} className="loading-image" />
  ) : []
}

export {
  renderAlert,
  getAvatar,
  getDisplayName,
  renderLoading
}