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
    component: React.FC,
    hashLink?: { text: string, link: string }[]
}

export const subProductRoutes: IRoute[] = [
    {
        text: 'Files and Folders',
        link: '/products/files-and-folders',
        component: SubProduct,
        hashLink: [
            { text: 'Hospital File Folders', link: '#hospital-file-folders' },
            { text: 'Doctor File Folders', link: '#doctor-file-folders' },
            { text: 'PVC File Folder Files', link: '#pvc-file-folder-files' },
            { text: 'Art Card and ITC File Folders', link: '#art-card-and-itc-file-folders' },
            { text: 'Button File Folders', link: '#button-file-folders' }
        ]
    },
    {
        text: 'Hospital Stationery',
        link: '/products/hospital-stationery',
        component: SubProduct,
        hashLink: [
            { text: 'MRI and CT Scan Bags / Covers / Envelopes', link: '#mri-and-ct-scan-bags-covers-envelopes' },
            { text: 'X- Ray Report Bags / X- Ray Envelopes', link: '#x-ray-report-bags-x-ray-envelopes' }
        ]
    },
    {
        text: 'Identification Tags',
        link: '/products/identification-tags',
        component: SubProduct,
        hashLink: [
            { text: 'Patient Identification Bands & Tags', link: '#patient-identification-bands-tags' },
            { text: 'Identification Wristband', link: '#identification-wristband' }
        ]
    },
    {
        text: 'Promotional Bags',
        link: '/products/promotional-bags',
        component: SubProduct,
        hashLink: [
            { text: 'Gift Bags / Customise Bags', link: '#gift-bags-customise-bags' },
            { text: 'Jewellery Bags', link: '#jewellery-bags' },
            { text: 'Shopping Bags', link: '#shopping-bags' },
            { text: 'My Clear Bag (Button Bag)', link: '#my-clear-bag-button-bag' }
        ]
    },
    {
        text: 'Office Stationery',
        link: '/products/office-stationery',
        component: SubProduct,
        hashLink: [
            { text: 'Educational Stationery', link: '#educational-stationery' },
            { text: 'Innovative of Stationery', link: '#innovative-of-stationery' },
            { text: 'Office Files & Display Files', link: '#office-files-display-files' }
        ]
    },
    {
        text: 'Promotional Products',
        link: '/products/promotional-products',
        component: SubProduct,
        hashLink: [
            { text: 'Printed CD"s & CD Covers', link: '#printed-cds-cd-covers' },
            { text: 'Hand Fans / Promotional Hand Fans', link: '#hand-fans-promotional-hand-fans' },
            { text: 'Danglers', link: '#danglers' }
        ]
    }
]

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

const routes: IRoute[] = [...headerRoutes, ...footerRoutes, ...homeRoutes, ...authRoutes, ...subProductRoutes]

export default routes;