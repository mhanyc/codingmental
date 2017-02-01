FROM ccnmtl/hugo.base
WORKDIR /app
COPY . /app/
RUN make
EXPOSE 1313
ENV HUGO /usr/bin/hugo
CMD ["make", "docker-compose-runserver"]
