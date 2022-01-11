import Header from './Header'
import CollectionBody from './CollectionBody'
import logo from './concept3.JPG'
import logo2 from './concept2.JPG'
import logo3 from './concept1.JPG'
import Shop from './Shop'
const Collection = () => {

    return (
        <div>
            <Header />
            <CollectionBody bodyClass="body1" headText1="Heirloom Spring Collection" headText2="by Rony Montenegro" 
            logoArt={logo} footText1="Collection I notes" footText2="1" className={'concept-art'}/>
           <CollectionBody bodyClass="body2" headText1="Lorem ipsum dolor sit amet, consectetur adipiscing elit," 
            headText2="Donec eleifend massa et diam imperdiet, a malesuada tellus pretium. Nunc scelerisque, ligula et aliquet bibendum, risus nulla volutpat sapien." 
            logoArt={logo2} footText1="Collection I notes" footText2="2" />
            <CollectionBody bodyClass="body2" headText1="Lorem ipsum dolor sit amet, consectetur adipiscing elit," 
            headText2="Donec eleifend massa et diam imperdiet, a malesuada tellus pretium. Nunc scelerisque, ligula et aliquet bibendum, risus nulla volutpat sapien." 
            logoArt={logo3} footText1="Collection I notes" footText2="3"/>
            <Shop  />
        </div>
        
    )
}

export default Collection
