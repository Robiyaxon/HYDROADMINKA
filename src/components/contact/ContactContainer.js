import { connect } from "react-redux";
import { Contact } from './Contact';
import { getContactHeader } from './../../redux/contact-reducer2';

const mapStateToProps = (state) => ({
    title_uz: state.contactPage.title_uz,
    title_krl: state.contactPage.title_krl,
    title_ru: state.contactPage.title_ru,
    title_en: state.contactPage.title_en
})

export default connect(mapStateToProps, {getContactHeader})(Contact)