import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

export default function Shop() {
  useEffect(() => {
    const header =
      document.getElementById("site-header") ||
      document.querySelector(".navbar.fixed-top") ||
      document.querySelector("header");
    const setH = () =>
      document.documentElement.style.setProperty("--header-h", `${header ? header.offsetHeight : 96}px`);
    setH();
    const ro = header ? new ResizeObserver(setH) : null;
    ro?.observe?.(header);
    window.addEventListener("resize", setH);
    return () => { ro?.disconnect?.(); window.removeEventListener("resize", setH); };
  }, []);

  const products = [
    {
      image: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-6/539438565_1087776680133818_4479499426870874788_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5MucKU_YfEgQ7kNvwEpya4l&_nc_oc=AdkcA8jePDGw2ZKYsupEHAwyTm7OzP0FnEUZsSuqmxSVAn2Ewcu9rQEXwzzpAbvLLn8l1fGZjmG7cAICA1qGDBXa&_nc_zt=23&_nc_ht=scontent.fbkk22-3.fna&_nc_gid=R8wPGpMpmJ2yjaL-X424ug&oh=00_Afcty_7XoW0i-5qIfg8CLltJbYT_TDotx2zRd-tJS7rsfA&oe=68FEE85F",
      title: "2025/26 Sukhothai FC Home Jersey Kit",
      price: 690, currency: "THB", badge: "SIGNED PRODUCT", lowStock: true,
    },
    {
      image: "https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/538301636_1087776866800466_3970485190902917564_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cSbvQp0zDSQQ7kNvwHac2_C&_nc_oc=AdkrRegNTXI4D7CC85E13bsXVURL8PxBpB5Wkiu4PF2n4sYz1hOWc_SsUndew1C6XGqlmpGm4b6GUHbvwdjgkzCj&_nc_zt=23&_nc_ht=scontent.fbkk22-6.fna&_nc_gid=uZybs8YJxEDfauqWbLqK9A&oh=00_Afe-gTeftiZxJrl2fTiHRxFL5vcB7ZwLZw08XQr3-iwrjA&oe=68FED569",
      title: "2025/26 Sukhothai FC Away Jersey Kit",
      price: 690, currency: "THB",
    },
    {
      image: "https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-6/538079714_1087776900133796_6196626714322553730_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7qAQRkWoqy8Q7kNvwGs2grs&_nc_oc=AdkWcXhEE_s9Kv4VwZdC6OqiwY_hvqflHppv4o85xB_bntaiCQ-IuuymTxaqWgbahtL2tTQHHb_0iWzthJ_9GFQm&_nc_zt=23&_nc_ht=scontent.fbkk22-7.fna&_nc_gid=Q_lD8LfLRBx209mZ_W5hZQ&oh=00_AfdQCQ_B4XFa7DAjYIf8vLLOFhzFnwkWCJA0zr_Lf8fX9g&oe=68FEE6EB",
      title: "2025/26 Sukhothai FC Third Jersey Kit",
      price: 690, currency: "THB",
    },
    {
      image: "https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-6/539651121_1087776830133803_7294596028362315971_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qVtzeuTsFFIQ7kNvwGHJLPO&_nc_oc=AdmR_DCtyBJ5gZnGxvDwT6fR59nF6CH4ojUPRYXKu5F-B9ec4Rl89zTD7HXwGydgaR2YLDMriUox1xuIyy_cZ930&_nc_zt=23&_nc_ht=scontent.fbkk22-7.fna&_nc_gid=5tE3nkUkf4w9QJUTERDZiw&oh=00_Afeyz11HgQ4fJgiM-JPI46meHw_zd-dLr08N8JAW8_H6rw&oe=68FEEABF",
      title: "2025/26 Sukhothai FC Home GK Jersey Kit",
      price: 690, currency: "THB",
    },
    {
      image: "https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/538698931_1087776850133801_8095788721562574179_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=U4Mv8VlJq3YQ7kNvwFj48L6&_nc_oc=AdmgPCDLRfzYUlrhFutlhvrpsMHYGqz6rJFGEBTPY90yjTHlkpcIEnsFWdR44mOFd_CRpDS9GhB-C9L0SVMsPiM2&_nc_zt=23&_nc_ht=scontent.fbkk22-6.fna&_nc_gid=2B6PAt53Up-0MnNme59Ksg&oh=00_AffhxYsGQ2d_oxX0wksR0v6rrcsvVvMNhOiazj10OEn0qg&oe=68FED1E7",
      title: "https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/539651121_1087776830133803_7294596028362315971_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HZ4YffjdaSAQ7kNvwFF4QZJ&_nc_oc=AdknD77l7Rgd-J88IMswZUnF0xkWc4JxXBl5w3gQffTyl9zHoQKo2YY_QDxqVRvDvWM-kR9dIAofciHe_IFELms1&_nc_zt=23&_nc_ht=scontent.fbkk29-5.fna&_nc_gid=bHLDhmaqySut_ssR9xrx0g&oh=00_Afd4NW913U73PiMDe0OcU-k1xc4cRfb40o4Y1bMx5-J4TQ&oe=68F5E87F",
      title: "2025/26 Sukhothai FC Away GK Jersey Kit",
      price: 690, currency: "THB",
    },
    {
      image: "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/538303302_1087776880133798_4486503393541590042_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ry08r1dtwJMQ7kNvwEXgJjf&_nc_oc=Adn04CIlELunpaosUIug-l5Mk9kzRwew6SwE0tSwlpiby-B39OUJs0u0RAQxbJqhw2iVIBp7S1LbL_1mWDrhFzpf&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&_nc_gid=_UUDjzaVAav2UIymQgPQVA&oh=00_AfeqjnAoaLXQxMzPYlZptExlH1R9I7y3dZ-hVQTAOVnqQA&oe=68FED36E",
      title: "https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/539651121_1087776830133803_7294596028362315971_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HZ4YffjdaSAQ7kNvwFF4QZJ&_nc_oc=AdknD77l7Rgd-J88IMswZUnF0xkWc4JxXBl5w3gQffTyl9zHoQKo2YY_QDxqVRvDvWM-kR9dIAofciHe_IFELms1&_nc_zt=23&_nc_ht=scontent.fbkk29-5.fna&_nc_gid=bHLDhmaqySut_ssR9xrx0g&oh=00_Afd4NW913U73PiMDe0OcU-k1xc4cRfb40o4Y1bMx5-J4TQ&oe=68F5E87F",
      title: "2025/26 Sukhothai FC Third GK Jersey Kit",
      price: 690, currency: "THB",
    },
    {
      image: "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/487491032_978578984386922_7478176412762255892_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3lT00SaPb38Q7kNvwGneEt4&_nc_oc=AdnXCkQBCTVeAfW4qspEBSh-k-HE2I5rmxAtnboRCHvRWlOBjttSWx-PM6rF0G8NvDRCOPzJcXT0CKlbfxogsep1&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&_nc_gid=wPMt9e4K2NkYK2yzVa1ghQ&oh=00_AfcvbaxnzYNYGziwLvOVC4uVzQlTJFMCgq8r_gW4yZi52A&oe=68FEE8AB",
      title: "https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/539651121_1087776830133803_7294596028362315971_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HZ4YffjdaSAQ7kNvwFF4QZJ&_nc_oc=AdknD77l7Rgd-J88IMswZUnF0xkWc4JxXBl5w3gQffTyl9zHoQKo2YY_QDxqVRvDvWM-kR9dIAofciHe_IFELms1&_nc_zt=23&_nc_ht=scontent.fbkk29-5.fna&_nc_gid=bHLDhmaqySut_ssR9xrx0g&oh=00_Afd4NW913U73PiMDe0OcU-k1xc4cRfb40o4Y1bMx5-J4TQ&oe=68F5E87F",
      title: "2024/25 Sukhothai FC Home Jersey Kit",
      price: 590, currency: "THB", badge: "On Sale", lowStock: true,
    },
    {
      image: "https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/480860827_954638850114269_7123621114180924493_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pIMmhMyIKwUQ7kNvwGLB6Wb&_nc_oc=AdmXu1n1bjwpmxrh9bNobUrFX5EtXZuJ7mh6FwRto4R9xYwBSOyvEqzf10Q1oVjIiS0STUmwDcXB5XEfYh9s6PsS&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=SGIXqaxlrvRAO5801FKMtw&oh=00_Afc204j0v-ItL-lWqO1P02whkb7Fvu0TFIO8U79WhCgiyg&oe=68FEEE88",
      title: "https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/539651121_1087776830133803_7294596028362315971_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HZ4YffjdaSAQ7kNvwFF4QZJ&_nc_oc=AdknD77l7Rgd-J88IMswZUnF0xkWc4JxXBl5w3gQffTyl9zHoQKo2YY_QDxqVRvDvWM-kR9dIAofciHe_IFELms1&_nc_zt=23&_nc_ht=scontent.fbkk29-5.fna&_nc_gid=bHLDhmaqySut_ssR9xrx0g&oh=00_Afd4NW913U73PiMDe0OcU-k1xc4cRfb40o4Y1bMx5-J4TQ&oe=68F5E87F",
      title: "2023/24 Sukhothai FC Home Jersey Kit",
      price: 590, currency: "THB" , badge: "On Sale", lowStock: true,
    },
    {
      image: "https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/481024267_954036190174535_7137121884771841131_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=w5p3Xjpd1iEQ7kNvwGWKMNo&_nc_oc=AdlzjW8XWDRRGx0MU0bmFpVc1_j16-HZIhHKSD9l8915rVTtvPXeO7x-jgdl8npTLd8XK9L9iSoS-KV71M2qeLQq&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=xw6tq0LL62lqyRwJRc6xdw&oh=00_AfdBxlYVSALBQUWw8p_s2FPoKiPz6CknGtR7Ifig7lJmwQ&oe=68FEF766",
      title: "https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/539651121_1087776830133803_7294596028362315971_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HZ4YffjdaSAQ7kNvwFF4QZJ&_nc_oc=AdknD77l7Rgd-J88IMswZUnF0xkWc4JxXBl5w3gQffTyl9zHoQKo2YY_QDxqVRvDvWM-kR9dIAofciHe_IFELms1&_nc_zt=23&_nc_ht=scontent.fbkk29-5.fna&_nc_gid=bHLDhmaqySut_ssR9xrx0g&oh=00_Afd4NW913U73PiMDe0OcU-k1xc4cRfb40o4Y1bMx5-J4TQ&oe=68F5E87F",
      title: "2023/24 Sukhothai FC Away Jersey Kit",
      price: 590, currency: "THB" , badge: "On Sale", lowStock: true,
    },
    {
      image: "https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/480777725_954036543507833_2882797738094631767_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lldQ9UX7yjAQ7kNvwHBEygK&_nc_oc=Adli7baPEl4L2ZTwDvhGuM_c5UX23JdCnwMcI5siwQ6jmbGSVv5sviqp02-e9gWEfGj1t7gkhaN4TfCGcl4bR9X0&_nc_zt=23&_nc_ht=scontent.fbkk22-1.fna&_nc_gid=3NGe5hqwfdLXYB4cU4YKJw&oh=00_Afc0no76Wvx3z3U9_nzScebchgsdXNBcv7mL6GS5A4L58w&oe=68FEF6FC",
      title: "https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/539651121_1087776830133803_7294596028362315971_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HZ4YffjdaSAQ7kNvwFF4QZJ&_nc_oc=AdknD77l7Rgd-J88IMswZUnF0xkWc4JxXBl5w3gQffTyl9zHoQKo2YY_QDxqVRvDvWM-kR9dIAofciHe_IFELms1&_nc_zt=23&_nc_ht=scontent.fbkk29-5.fna&_nc_gid=bHLDhmaqySut_ssR9xrx0g&oh=00_Afd4NW913U73PiMDe0OcU-k1xc4cRfb40o4Y1bMx5-J4TQ&oe=68F5E87F",
      title: "2022/23 Sukhothai FC Third Jersey Kit",
      price: 590, currency: "THB" , badge: "On Sale", lowStock: true,
    },
    {
      image: "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/480942455_956714356573385_5157558310583070260_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=thNBhQWYtgIQ7kNvwFgcA5Y&_nc_oc=Adk6B_plWThgKnjEK8YnIsqx8icfPG6SOaEEtt7CHnkp93AB_g39ZD3JdFT9VtTtZZWXgyzM47vYncsrhK5YjC3t&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&_nc_gid=zFvFwHSwyt_gkO9Ya4bAJQ&oh=00_Afd6eQs3_6cmRLgSCE4U5bqQWEMk1VeJAv_UVc_mzg0Ujg&oe=68FEE5E8",
      title: "https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/539651121_1087776830133803_7294596028362315971_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HZ4YffjdaSAQ7kNvwFF4QZJ&_nc_oc=AdknD77l7Rgd-J88IMswZUnF0xkWc4JxXBl5w3gQffTyl9zHoQKo2YY_QDxqVRvDvWM-kR9dIAofciHe_IFELms1&_nc_zt=23&_nc_ht=scontent.fbkk29-5.fna&_nc_gid=bHLDhmaqySut_ssR9xrx0g&oh=00_Afd4NW913U73PiMDe0OcU-k1xc4cRfb40o4Y1bMx5-J4TQ&oe=68F5E87F",
      title: "2022/23 Sukhothai FC Away GK Jersey Kit",
      price: 590, currency: "THB" , badge: "On Sale", lowStock: true,
    },
    {
      image: "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/480688698_951128300465324_571707911684117916_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BzqP7O5qrwoQ7kNvwHoUUKe&_nc_oc=Adm8nQ3AVLcNs9ZaN08JaEoov9QDuOvLS0reQoe3W70o8CqOVhdj0RyGQ3rSQBuViD72ie-C1JWTJCh-vb2HH3rF&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&_nc_gid=p83tL_CPGtP-7iAT9Z5scA&oh=00_Afck8oV5Et53Fiwde0QS-sHgHnLAx_x7Ljy45iPUor8LCg&oe=68FEF9CB",
      title: "https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/539651121_1087776830133803_7294596028362315971_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HZ4YffjdaSAQ7kNvwFF4QZJ&_nc_oc=AdknD77l7Rgd-J88IMswZUnF0xkWc4JxXBl5w3gQffTyl9zHoQKo2YY_QDxqVRvDvWM-kR9dIAofciHe_IFELms1&_nc_zt=23&_nc_ht=scontent.fbkk29-5.fna&_nc_gid=bHLDhmaqySut_ssR9xrx0g&oh=00_Afd4NW913U73PiMDe0OcU-k1xc4cRfb40o4Y1bMx5-J4TQ&oe=68F5E87F",
      title: "2021/22 Sukhothai FC Away GK Jersey Kit",
      price: 490, currency: "THB" , badge: "On Sale", lowStock: true,
    },
    {
      image: "https://scontent.fbkk22-4.fna.fbcdn.net/v/t39.30808-6/480307933_949387727306048_431918469030135648_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=joDv5PqzrwIQ7kNvwF8wUG6&_nc_oc=AdnZpbmKbQdl3-OLSdpnc2wfKhrxDbofjukroGQRbIsbTw9DgI8Txs3XcjUf3GNykyGec3nXOFQ6BF7vA_T9g_dv&_nc_zt=23&_nc_ht=scontent.fbkk22-4.fna&_nc_gid=NDFKNfJNHeYoIHY5S560jw&oh=00_AfedesPCskPHNHii7LcTI2qGQuq10ewNRGTDkBtLO8rMVw&oe=68FF0071",
      title: "https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/539651121_1087776830133803_7294596028362315971_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HZ4YffjdaSAQ7kNvwFF4QZJ&_nc_oc=AdknD77l7Rgd-J88IMswZUnF0xkWc4JxXBl5w3gQffTyl9zHoQKo2YY_QDxqVRvDvWM-kR9dIAofciHe_IFELms1&_nc_zt=23&_nc_ht=scontent.fbkk29-5.fna&_nc_gid=bHLDhmaqySut_ssR9xrx0g&oh=00_Afd4NW913U73PiMDe0OcU-k1xc4cRfb40o4Y1bMx5-J4TQ&oe=68F5E87F",
      title: "2021/22 Sukhothai FC Third GK Jersey Kit",
      price: 490, currency: "THB" , badge: "On Sale", lowStock: true,
    },
  ];

  return (
    <div className="shop-page">
      <div className="container">
        <h1 className="shop-heading">Shop</h1>

        <div className="prod-grid">
          {products.map((p, i) => <ProductCard key={i} {...p} />)}
        </div>
      </div>
    </div>
  );
}
