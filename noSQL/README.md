NoSQL learning:
1. ACID: 数据库事务正确执行的四个基本要素 ———— 原子性(Atomicity)、一致性(Consistency)、隔离性(Isolation)、持久性(Durability)。
2. NoSQL常被解释为"non-relational"或"Not Only SQL"。
3. NoSQL的优势：
	易扩展、
	大数据量，高性能、
	灵活的数据模型、
	高可用
4. NoSQL数据库分类：
	键值(Key-Value)存储数据库, eg: Tokyo Cabinet/Tyrant, Redis, Voldemort, Oracle BDB
	列存储数据库, eg: Cassandra, HBase, Riak
	文档型数据库, eg: CouchDB MongoDB, SequoiaDB
	图形(Graph)数据库, eg: Neo4J, InfoGrid, Infinite Graph
5. NoSQL数据路适用场景：
	(1) 数据模型简单;
	(2) 灵活性要求高;
	(3) 数据库性能要求高;
	(4) 不需要高度的数据一致性;
	(5) 对于给定的key，容易映射复杂值的环境。
6. NoSQL数据库的共同特征：
	(1) 不需要预定义模式;
	(2) 无共享架构;
	(3) 弹性可扩展;
	(4) 分区;
	(5) 异步复制;
	(6) BASE（最终一致性、软事务）。
