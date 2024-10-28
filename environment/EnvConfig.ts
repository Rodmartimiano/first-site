const EnvConfigDevelop = {
  apiUrl: "http://localhost:3490",
};

function getConfig() {
  //TODO: adicionar dotenv e colocar variaveis por contexto
  return EnvConfigDevelop;
}

export default getConfig;
