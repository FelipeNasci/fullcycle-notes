### Principal objetivo
Permitir que containers se comuniquem entre si

### Tipos de networks

- bridge: Um container realiza comunicação com outro

- Host: Mescla a network do docker com a máquina local

- overlay: Uma network entre vários containers docker localizados em máquinas separadas

- none: Container executa de forma isolada, não utiliza nenhuma rede.

### Comandos

- Listar networks

```docker network ls```

- Criar network

```docker network create --driver bridge network-name```

- Conectar um container a uma network existente

```docker network connect nome-rede container```

### Acessando a máquina local dentro de um container

Os containers são isolados, portanto, ao utilizar o ``localhost:xxxx`` estaremos utilizando o localhost do container e não do host.

Podemos utilizar o seguinte endereço para acessar o host:

```http://host.docker.internal:PORT_APPLICATION```

