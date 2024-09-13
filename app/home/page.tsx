import { GetServerSideProps } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
}

interface HomeProps {
  users: User[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default function Home({ users }: HomeProps) {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
