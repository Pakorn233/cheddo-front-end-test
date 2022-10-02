import { HeaderContainer } from '../style'
import logo from './../../assets/image/logo.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} className='logo' alt="logo" />
      <div className='header-text'>
        <h1>Front-end Developer Testting</h1>
        <h2>Cheddo Technology Co.Ltd</h2>
      </div>
    </HeaderContainer>
  )
}