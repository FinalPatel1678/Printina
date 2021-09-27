import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import HowItWorks from './Pages/HowItWorks';
import AboutUs from './Pages/AboutUs';
import Products from './Pages/Products';
import FAQs from './Pages/FAQs';
import ContactUs from './Pages/ContactUs';
import Blogs from './Pages/Blogs';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Sitemap from './Pages/Sitemap';
import SubProduct from './Pages/SubProduct';

export interface IRoute {
    text: string,
    link: string,
    component: React.FC
}

export const subProductRoutes: IRoute[] = [
    { text: 'Files and Folders', link: '/products/files-and-folders', component: SubProduct },
    { text: 'Hospital Stationery', link: '/products/hospital-stationery', component: SubProduct },
    { text: 'Identification Tags', link: '/products/identification-tags', component: SubProduct },
    { text: 'Promotional Bags', link: '/products/promotional-bags', component: SubProduct },
    { text: 'Office Stationery', link: '/products/office-stationery', component: SubProduct },
    { text: 'Promotional Products', link: '/products/promotional-products', component: SubProduct }]

export const headerRoutes: IRoute[] = [
    { text: 'How it works', link: '/how-it-works', component: HowItWorks },
    { text: 'About us', link: '/about-us', component: AboutUs },
    { text: 'Products', link: '/products', component: Products },
    { text: 'Blogs', link: '/blogs', component: Blogs },
    { text: 'FAQs', link: '/faqs', component: FAQs },
    { text: 'Contact us', link: '/contact-us', component: ContactUs }]

export const footerRoutes: IRoute[] = [
    { text: 'Privacy Policy', link: '/privacy-policy', component: PrivacyPolicy },
    { text: 'Sitemap', link: '/sitemap', component: Sitemap }]

export const homeRoutes: IRoute[] = [{ text: 'Home', link: '/', component: Home }]

export const authRoutes: IRoute[] = [
    { text: 'Registration', link: '/registration', component: Registration },
    { text: 'Login', link: '/login', component: Login }]

export const footerTop: IRoute[] = [
    ...homeRoutes,
    { text: 'Products', link: '/products', component: Products },
    { text: 'Blogs', link: '/blogs', component: Blogs },
    { text: 'FAQs', link: '/faqs', component: FAQs }]

const routes: IRoute[] = [...headerRoutes, ...footerRoutes, ...homeRoutes, ...authRoutes,...subProductRoutes]

export default routes;