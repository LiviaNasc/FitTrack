const db = require('./db/db');

try {
  db.prepare('ALTER TABLE exercicios ADD COLUMN tipo TEXT').run();
} catch (e) {
  console.log('Coluna tipo já existe ou erro:', e.message);
}
try {
  db.prepare('ALTER TABLE exercicios ADD COLUMN musculo TEXT').run();
} catch (e) {
  console.log('Coluna musculo já existe ou erro:', e.message);
}
try {
  db.prepare('ALTER TABLE exercicios ADD COLUMN equipamento TEXT').run();
} catch (e) {
  console.log('Coluna equipamento já existe ou erro:', e.message);
}
try {
  db.prepare('ALTER TABLE exercicios ADD COLUMN dificuldade TEXT').run();
} catch (e) {
  console.log('Coluna dificuldade já existe ou erro:', e.message);
}
try {
  db.prepare('ALTER TABLE treino_exercicios ADD COLUMN series_realizadas INTEGER;').run();
} catch (e) {
  console.log('Coluna series_realizadas já existe ou erro:', e.message);
}
try {
  db.prepare('ALTER TABLE treino_exercicios ADD COLUMN repeticoes_realizadas INTEGER;').run();
} catch (e) {
  console.log('Coluna repeticoes_realizadas já existe ou erro:', e.message);
}
try {
  db.prepare('ALTER TABLE treino_exercicios ADD COLUMN carga_realizada TEXT;').run();
} catch (e) {
  console.log('Coluna carga_realizada já existe ou erro:', e.message);
}


console.log('Migração concluída!');