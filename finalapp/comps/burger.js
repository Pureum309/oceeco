export default function Hamburger(isOpen){
    return(
        <>
            <div className="hamburger">
                <div className="burger burger 1" />
                <div className="burger burger 2" />
                <div className="burger burger 3" />
            </div>

            <style jsx>{`
                .hamburger {
                    width: 2rem;
                    height: 2rem;
                    // display: flex;
                    // justify-content:space-around;
                    // flex-flow: column nowrap;
                    display: fixed;
                    padding-top: 5px;
                    margin-left: 20px;
                    z-index: 10;
                    
                  }
                  
                  .burger {
                    width: 2rem;
                    height: 0.25rem;
                    padding: 2px;
                    margin: 5px;
                    border-radius: 10px;
                    background-color: rgb(141, 198, 244);
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                  }
            

                  .burger1 {
                      transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                  }

                  .burger2 {
                    transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
                    opacity: ${isOpen ? 0 : 1};

                  }

                  .burger3 {
                    transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                  }
                 
            
            `}</style>
        
        
        
        </>
    )
}