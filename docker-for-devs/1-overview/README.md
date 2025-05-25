## Dockerfile para desenvolvimento

Podemos ter múltiplos arquivos de dockerfile. Para evitar repetição de código, podemos fazer uso de um `Dockerfile.base`, que contém todas as instruções comuns para todos os serviços, e outros Dockerfile específicos para cada ambiente.

```
├── Dockerfile.base       # shared
├── Dockerfile.dev        # dev env
├── Dockerfile.prod       # prod env
├── Dockerfile.staging    # stg env
```

## Considerações

- A imagem deve ser a mais próxima ou a mesma que o ambiente de produção
- A imagem deve ser compatível com o ambiente de execução.
- O container deve ser um ambiente limitado, pois quanto maior o número de pacotes e ferramentas instalados no container, mais vulnerável ele é.

## Menores distribuições linux

- Alpine
- Debian Slim
- Busybox
- Scratch - Imagem mais básica
- Distroless - Imagem sem shell, há apenas a aplicação.

## Gerar build a partir de um dockerfile específico

```
docker build -t <image-name> -f Dockerfile.<env> .
```

## Determinar um usuário padrão

Todas as imagens docker vem com usuário padrão como `root`. Isso pode ser um problema de segurança, pois o usuário root tem acesso a todos os arquivos do sistema. Para evitar isso, podemos criar um usuário específico para o container.

No Dockerfile podemos definir o usuário. Dessa forma a aplicação poderá escrever apenas nos diretórios em que o USER tem acesso.

```
################ debian ################
# Criar um usuário
RUN adduser -m -u <userid> <username>

# Alterar ID de um usuário
RUN usermod -u <userid> <username>
########################################

################ alpine ################
# Criar um usuário
RUN adduser -D -u <userid> <username>

# Alterar ID de um usuário
RUN sed -i "s/<userid>/<another_userid>/g" /etc/passwd
########################################

USER <username> 
```

OBS: 

Adicionalmente também podemos ter problemas com permissão ao tentar editar arquivos de um container. Como solução podemos alterar o usuário do arquivo para o mesmo usuário do SO.

```
chown <username> -R <filename>
```
## Diretório de trabalho

O diretório de trabalho define o local que o projeto será executado.

- Depois de estabelecido o `WORKDIR` os comandos, tais como, `COPY`, `RUN` etc levará em consideração a WORKDIR