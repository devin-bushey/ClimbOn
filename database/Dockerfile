FROM postgres:12

ENV POSTGRES_DB mydb
ENV POSTGRES_USER myuser
ENV POSTGRES_PASSWORD mypassword

RUN mkdir -p /var/lib/postgresql/data
RUN chown -R postgres:postgres /var/lib/postgresql/data

VOLUME /var/lib/postgresql/data

EXPOSE 5432

USER postgres

CMD ["postgres"]
