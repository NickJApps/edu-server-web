import { readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Получаем путь к JSON-файлу
const dir = dirname(dirname(fileURLToPath(import.meta.url)));
const dataFile = join(dir, 'data', 'task.json');

// Функция загрузки всех задач
export async function getAllTasks() {
    const rawData = await readFile(dataFile, 'utf8');
    const data = JSON.parse(rawData);
    return data.tasks;
}

// Получить задачу по ID
export async function getTaskById(id) {
    const tasks = await getAllTasks();
    return tasks.find(t => t._id === String(id)) || null;
}

// Добавить новую задачу
export async function addTask(title, desc) {
    // 1. читаем текущие данные
    const rawData = await readFile(dataFile, 'utf8');
    const objData = JSON.parse(rawData);

    // 2. создаем новый объект задачи
    const task = {
        _id: 8,        // уникальный id
        title: title,
        desc: desc,
        createdAt: new Date().toISOString()
    };

    console.log(objData);

    // 3. добавляем его в массив
    objData.data.push(task); //Обращаемся к массиву внутри объекта 

    // 4. сохраняем файл обратно
    await writeFile(dataFile, JSON.stringify(objData, null, 2), 'utf8'); //не оборачивать в объект иначе происходит ошибка и объект записывается с новым именем!!!!
}

// Удалить задачу по ID
export async function deleteTask(id) {
    let tasks = await getAllTasks();
    let index = tasks.findIndex(t => t._id == id);
    if(index == -1){
        return;
    }
    tasks.splice(index, 1);
    await writeFile(dataFile, JSON.stringify({tasks}, null, 2), 'utf8'); //Поэтому при записи ты должен оборачивать массив обратно в объект {tasks}
}
