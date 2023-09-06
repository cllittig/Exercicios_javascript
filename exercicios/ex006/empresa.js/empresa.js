class empresa{
    constructor(nome,cnpj,cadastro_nacional){
        this.nome = nome;
        this.cnpj  = cnpj;
        this.cadastro_nacional = cadastro_nacional;
    }

    contas(){

    }

}

class departamento{
    constructor(nome_departamento,endereço,projeto){
        this.nome_departamento = nome_departamento;
        this.endereço = endereço;
        this.projeto = projeto;
    }

    projeto(){
        
    }
}

class funcionarios{
    constructor(nome_func, cpf, cargo, departamento) {
        this.nome_func = nome_func;
        this.cpf = cpf;
        this.cargo = cargo;
        this.departamento = departamento;
        
    }
}

class projeto{
    constructor(noem_projeto,tipo_projeto,departamento_projeto) {
        this.noem_projeto = noem_projeto;
        this.tipo_projeto = tipo_projeto;
        this.departamento_projeto = departamento_projeto;
        
    }
}


/*classes:
empresa{
    
    nome
    cnpj
    cadastro nacional
}

departamento{
    nome do departamento
    endereço
    tipo de projeto
}

funcionarios{
    nome
    cpf
    cargo 
    depatamento
}

projeto{
    nome do projeto
    tipo de projeto
    departamento do projeto
}


 */