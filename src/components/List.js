.center-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.center-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  transition: transform 0.2s;
}

.center-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.center-card h2 {
  margin-top: 0;
}

.center-card p {
  margin: 10px 0;
}
