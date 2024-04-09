import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';  
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div>
        <footer className="bg-sky-50 py-12">
<div className="container">
<div className="flex  flex-col-reverse md:flex-row justify-around items-center m-6">
<div className="first half">
<div>
 <h1 className="text-2xl font-bold py-2">Phoenix Store</h1>
  <p>23, grand canyon street, Ikeja, Lagos, Nigeria</p>
  <p>phoenixstore@gmail.com</p>
  <p>+234 809 431 5855</p>
 </div>
 <div className='flex gap-6 mt-2 '>
  <span><FacebookIcon/></span>
  <span ><InstagramIcon/></span>
  <span ><XIcon/></span>
  <span ><LinkedInIcon/></span>
 </div>
</div>
<div>
  <h1 className="text-base font-bold py-2">Sign up for news letter</h1>
  <p>Stay up to date with our latest products</p>
  <input type="email" placeholder="Type your email address" className="mt-2 p-3 rounded-l-md "/>
  <input type="submit" value="Subscribe" className="rounded-r-md bg-neutral-900 text-white p-3"/>
</div>
</div>


</div>

            <div className="container mx-auto">
              <p className="text-center">  Copyright &copy; Phoenix Store 2024. All rights reserved </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer