# Fetching the latest node image on alpine linux
FROM node:19.5.0-alpine AS builder

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# Installing dependencies
COPY ./package*.json /app/
#COPY ["package*.json", "nx.json", "/react-app/"]
RUN npm install


# Copying all the files in our project
COPY . .

RUN npm run build

FROM nginx:1.17.8-alpine
COPY --from=builder /app/dist/chatbot-sdk /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# # Fetching the latest nginx image
# FROM nginx

# # Copying built assets from builder
# COPY --from=builder /react-app /usr/share/nginx/html

# # Copying our nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf