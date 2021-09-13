import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.team.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 'c228ed64-f683-42c3-a1d6-6c08106c10e4',
        name: 'Test1',
        trainer: 'Trainer1',
        ort: 'TestOrt1',
      },
      {
        id: '5eec91d2-184e-4763-b2b0-6c118edb6cb0',
        name: 'Test2',
        trainer: 'Trainer2',
        ort: 'TestOrt2',
      },
      {
        id: '6d00990f-4c23-48fd-bb0b-37da718350fc',
        name: 'Test3',
        trainer: 'Trainer3',
        ort: 'TestOrt3',
      },
      {
        id: 'cd0f345b-52b1-4f49-8dcb-8c98d28be1f1',
        name: 'Test4',
        trainer: 'Trainer4',
        ort: 'TestOrt4',
      }, {
        id: '9ae4206a-68aa-433c-9070-bd1483bc33d7',
        name: 'Test5',
        trainer: 'Trainer5',
        ort: 'TestOrt5',
      },
      {
        id: '2b7a5520-8ebf-4a59-ab66-0da2316d39d4',
        name: 'Test6',
        trainer: 'Trainer6',
        ort: 'TestOrt6',
      },
      {
        id: 'cb9aa6a3-34c7-43c6-a18d-72c764261e3a',
        name: 'Test7',
        trainer: 'Trainer7',
        ort: 'TestOrt7',
      },
      {
        id: '0a7ff306-4e35-48b3-b704-f8dd667e2f9c',
        name: 'Test8',
        trainer: 'Trainer8',
        ort: 'TestOrt8',
      }
    ]
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
