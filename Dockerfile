FROM node:20-alpine

# הגדרת תיקיית העבודה
WORKDIR /app

# 1. מעתיקים את קבצי ה-package.json ומשנים בעלות למשתמש node
COPY --chown=node:node package*.json ./

# 2. התקנת חבילות פרודקשן
RUN npm install --only=production

# 3. מעתיקים את שאר קוד המקור ומשנים בעלות למשתמש node
COPY --chown=node:node . .

# 🔥 מעבר רשמי למשתמש המאובטח והמוגבל
USER node

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "app.js"]