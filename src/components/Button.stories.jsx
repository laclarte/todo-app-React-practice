import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = () => (
  <Button variant="primary">保存する</Button>
);

export const Add = () => (
  <Button variant="add">＋ 追加する</Button>
);

export const Danger = () => (
  <Button variant="danger">削除</Button>
);

export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
    <Button variant="primary">保存する</Button>
    <Button variant="add">＋ 追加する</Button>
    <Button variant="danger">削除</Button>
  </div>
);