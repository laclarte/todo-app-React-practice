import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Add = () => (
  <Button variant="add">追加</Button>
);

export const Danger = () => (
  <Button variant="delete">削除</Button>
);

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
    <Button variant="add">追加</Button>
    <Button variant="delete">削除</Button>
  </div>
);