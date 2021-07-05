FROM fusuf/whatsasena:latest

RUN git clone https://github.com/RAVANA-SL/KingMahasen /root/KingMahasen
WORKDIR /root/KingMahasen/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit


CMD ["node", "bot.js"]
