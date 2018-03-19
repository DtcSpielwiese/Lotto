FROM mongo:latest

ENV AUTH yes
ENV STORAGE_ENGINE wiredTiger
ENV JOURNALING yes

ADD run.sh /run.sh
ADD set_mongodb_password.sh /set_mongodb_password.sh
ADD mongodb_import_data.sh /mongodb_import_data.sh

ADD Praemien_CH.csv /Praemien_CH.csv
ADD Wertebereiche_CH.csv /Wertebereiche_CH.csv
ADD Regionen_CH.csv /Regionen_CH.csv
ADD Versicherungen_CH.csv /Versicherungen_CH.csv


USER root
RUN chown mongodb:mongodb /set_mongodb_password.sh && chown mongodb:mongodb /run.sh 
RUN chmod +x /set_mongodb_password.sh && chmod +x /run.sh  && chmod +x /mongodb_import_data.sh 


EXPOSE 27017 28017

CMD ["/run.sh"]