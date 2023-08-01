

class Login {

    txtUserName = 'input[placeholder="Username"]';
    txtPassword = 'input[placeholder="Password"]';
    sbm_btn = 'button[type="submit"]';
    verif_dash = 'h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]';


    setUserName(username)
    {
        cy.get(this.txtUserName).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit()
    {
        cy.get(this.sbm_btn).click();
    }


    verifyLogin()
    {
        cy.get(this.verif_dash).should('have.text', 'Dashboard');
    }
    
}

export default Login;