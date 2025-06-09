import mongoose from 'mongoose'

export const initMongoConnection = async () => {
  const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env
  const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`

 if (!MONGODB_USER || !MONGODB_PASSWORD || !MONGODB_URL || !MONGODB_DB) {
    console.error('Помилка: Одна або кілька змінних середовища MongoDB відсутні!');
    console.error('Поточні значення:', { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB });
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log('Зєднання з Mongo успішно встановлено!');
  } catch (err) {
    console.error('Зєднання з Mongo не вдалося', err);
    process.exit(1);
  }
};