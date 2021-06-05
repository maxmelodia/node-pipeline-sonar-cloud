------------------------------------------------------------------------------------------------------------------------------------------------
    Nesse desafio, iremos consolidar os conhecimentos em relação a criação de uma pipeline de CI realizando os seguintes passos.

    Crie uma pequena aplicação simples em node.js (qualquer aplicação mesmo)
    Crie testes de unidade para essa aplicação
    Crie uma pipeline de CI utilizando o Github actions que:
        Instale a aplicação
        Execute os testes
        Execute o SonarCloud
    Suba essa aplicação para um repositório público no Gthub e ative o status check para que seja possível dar o merge apenas se a aplicação passar na pipeline de CI e também se a aplicação passar no quality gate do SonarCloud.
    Crie uma Pull Request (PR) realizando todo o processo.
    Informe o link da PR abaixo para que possamos corrigir.

------------------------------------------------------------------------------------------------------------------------------------------------
->  sonarqube.org


npm init
npm install jest @types/jest sonar-scanner --only-dev

docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
localhost:9000