import {
  FaCcAmex,
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaEnvelope,
  FaFacebook,
  FaGooglePlusG,
  FaHome,
  FaInstagram,
  FaPhoneVolume,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Information = [
  {
    id: Math.random(),
    value: 'Cart',
  },
  {
    id: Math.random(),
    value: 'Account',
  },
  {
    id: Math.random(),
    value: 'Manufacturer',
  },
  {
    id: Math.random(),
    value: 'Finance',
  },
  {
    id: Math.random(),
    value: 'Shop',
  },
];

const company = [
  {
    id: Math.random(),
    value: 'About us',
  },
  {
    id: Math.random(),
    value: 'Contact us',
  },
  {
    id: Math.random(),
    value: 'Sitemap',
  },
  {
    id: Math.random(),
    value: 'Dilivery',
  },
  {
    id: Math.random(),
    value: 'Store',
  },
];

const contactUs = [
  {
    id: Math.random(),
    icon: FaHome,
    value: '4247 Ashford Drive Virginia VA-20006 USA',
  },
  {
    id: Math.random(),
    icon: FaPhoneVolume,
    value: '(+0) 900 901 904',
  },
  {
    id: Math.random(),
    icon: FaEnvelope,
    value: 'contact@domain.com',
  },
];

const socials = [
  {
    id: Math.random(),
    icon: FaFacebook,
  },
  {
    id: Math.random(),
    icon: FaTwitter,
  },
  {
    id: Math.random(),
    icon: FaYoutube,
  },
  {
    id: Math.random(),
    icon: FaInstagram,
  },
  {
    id: Math.random(),
    icon: FaGooglePlusG,
  },
];

const payments = [
  {
    id: Math.random(),
    icon: FaCcStripe,
  },
  {
    id: Math.random(),
    icon: FaCcPaypal,
  },
  {
    id: Math.random(),
    icon: FaCcMastercard,
  },
  {
    id: Math.random(),
    icon: FaCcVisa,
  },
  {
    id: Math.random(),
    icon: FaCcDiscover,
  },
  {
    id: Math.random(),
    icon: FaCcAmex,
  },
  {
    id: Math.random(),
    icon: FaGooglePlusG,
  },
];

const newsletter = [
  {
    id: 'male',
    value: 'Male',
  },
  {
    id: 'female',
    value: 'Female',
  },
];

export { Information, company, contactUs, socials, payments, newsletter };
