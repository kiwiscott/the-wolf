/*CREATE TABLE Book (
  BookId INT NOT NULL IDENTITY(1,1) ,
  Author VARCHAR(100)  NOT NULL,
  Title VARCHAR(100)  NOT NULL,
  Country VARCHAR(50)  NOT NULL,
  Published VARCHAR(50)  NOT NULL,
  UploadTime DATE,
  TotalViews INT ,
  PRIMARY KEY(BookId)
  )
GO
*/

SELECT CAST(BookId as varchar(20)) as value,Title, Author, Country, Published, UploadTime, TotalViews 
FROM Book 
WHERE (Title like '%%' OR Author like '%%' OR Country like '%%' OR Published like '%%')

SELECT CAST(BookId as varchar(20)) as value,Title, Author, Country, Published, UploadTime, TotalViews 
FROM Book 
WHERE CAST(BookId as varchar(20)) = ''


INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('1984','George Orwell','England','(1903-1950)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('A Doll''s House','Henrik Ibsen','Norway','(1828-1906)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('A Sentimental Education','Gustave Flaubert','France','(1821-1880)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Absalom,Absalom!','William Faulkner','United States','(1897-1962)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Adventures of Huckleberry Finn','Mark Twain','United States','(1835-1910)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Aeneid','Virgil','Italy','(70-19 BC)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Anna Karenina','Leo Tolstoy','Russia','(1828-1910)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Beloved','Toni Morrison','United States','(b. 1931)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Berlin Alexanderplatz','Alfred Doblin','Germany','(1878-1957)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Blindness','Jose Saramago','Portugal','(1922-2010)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Book of Disquiet','Fernando Pessoa','Portugal','(1888-1935)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Book of Job','God','Israel','(600-400 BC)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Brothers Karamazov','Fyodor M Dostoyevsky','Russia','(1821-1881)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Buddenbrooks','Thomas Mann','Germany','(1875-1955)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Canterbury Tales','Geoffrey Chaucer','England','(1340-1400)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Castle','Franz Kafka','Bohemia','(1883-1924)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Children of Gebelawi','Naguib Mahfouz','Egypt','(b. 1911)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Collected Fictions','Jorge Luis Borges','Argentina','(1899-1986)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Complete Poems','Giacomo Leopardi','Italy','(1798-1837)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Complete Stories','Franz Kafka','Bohemia','(1883-1924)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Complete Tales','Edgar Allan Poe','United States','(1809-1849)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Confessions of Zeno','Italo Svevo','Italy','(1861-1928)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Crime and Punishment','Fyodor M Dostoyevsky','Russia','(1821-1881)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Dead Souls','Nikolai Gogol','Russia','(1809-1852)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Death of Ivan Ilyich and Other Stories','Leo Tolstoy','Russia','(1828-1910)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Decameron','Giovanni Boccaccio','Italy','(1313-1375)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Devil to Pay in the Backlands','Joao Guimaraes Rosa','Brazil','(1880-1967)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Diary of a Madman and Other Stories','Lu Xun','China','(1881-1936)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Divine Comedy','Dante Alighieri','Italy','(1265-1321)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Don Quixote','Miguel de Cervantes Saavedra','Spain','(1547-1616)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Essays','Michel de Montaigne','France','(1533-1592)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Fairy Tales and Stories','Hans Christian Andersen','Denmark','(1805-1875)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Faust','Johann Wolfgang von Goethe','Germany','(1749-1832)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Gargantua and Pantagruel','Francois Rabelais','France','(1495-1553)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Gilgamesh Mesopotamia','Unknown','Unknown','(c 1800 BC)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Golden Notebook','Doris Lessing','England','(b.1919)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Great Expectations','Charles Dickens','England','(1812-1870)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Gulliver''s Travels','Jonathan Swift','Ireland','(1667-1745)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Gypsy Ballads','Federico Garcia Lorca','Spain','(1898-1936)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Hamlet','William Shakespeare','England','(1564-1616)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('History','Elsa Morante','Italy','(1918-1985)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Hunger','Knut Hamsun','Norway','(1859-1952)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Idiot','Fyodor M Dostoyevsky','Russia','(1821-1881)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Iliad','Homer','Greece','(c 700 BC)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Independent People','Halldor K Laxness','Iceland','(1902-1998)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Invisible Man','Ralph Ellison','United States','(1914-1994)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Jacques the Fatalist and His Master','Denis Diderot','France','(1713-1784)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Journey to the End of the Night','Louis-Ferdinand Celine','France','(1894-1961)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('King Lear','William Shakespeare','England','(1564-1616)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Leaves of Grass','Walt Whitman','United States','(1819-1892)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Life and Opinions of Tristram Shandy','Laurence Sterne','Ireland','(1713-1768)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Lolita','Vladimir Nabokov','Russia/United States','(1899-1977)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Love in the Time of Cholera','Gabriel Garcia Marquez','Colombia','(b. 1928)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Madame Bovary','Gustave Flaubert','France','(1821-1880)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Magic Mountain','Thomas Mann','Germany','(1875-1955)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Mahabharata','Mahabharata','India','(c 500 BC)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Man Without Qualities','Robert Musil','Austria','(1880-1942)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Mathnawi','Jalal ad-din Rumi','Afghanistan','(1207-1273)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Medea','Euripides','Greece','(c 480-406 BC)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Memoirs of Hadrian','Marguerite Yourcenar','France','(1903-1987)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Metamorphoses','Ovid','Italy','(c 43 BC)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Middlemarch','George Eliot','England','(1819-1880)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Midnight''s Children','Salman Rushdie','India/Britain','(b. 1947)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Moby-Dick','Herman Melville','United States','(1819-1891)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Mrs. Dalloway','Virginia Woolf','England','(1882-1941)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('BOOM, Slappen','Njaals Saga','Iceland','(c 1300)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Nostromo','Joseph Conrad','England','(1857-1924)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Odyssey','Homer','Greece','(c 700 BC)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Oedipus the King','Sophocles','Greece','(496-406 BC)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Old Goriot','Honore de Balzac','France','(1799-1850)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('he Old Man and the Sea','Ernest Hemingway','United States','(1899-1961)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('One Hundred Years of Solitude','Gabriel Garcia Marquez','Colombia','(b. 1928)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Orchard','Sheikh Musharrif ud-din Sadi','Iran','(c 1200-1292)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Othello','William Shakespeare','England','(1564-1616)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Pedro Paramo','Juan Rulfo Juan Rulfo','Mexico','(1918-1986)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Pippi Longstocking','Astrid Lindgren','Sweden','(1907-2002)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Poems','Paul Celan','Romania/France','(1920-1970)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Possessed','Fyodor M Dostoyevsky','Russia','(1821-1881)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Pride and Prejudice','Jane Austen','England','(1775-1817)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Ramayana','Valmiki','India','(c 300 BC)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Recognition of Sakuntala','Kalidasa','India','(c. 400)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Red and the Black','Stendhal','France','(1783-1842)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Remembrance of Things Past','Marcel Proust','France','(1871-1922)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Season of Migration to the North','Tayeb Salih','Sudan','(b. 1929)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Selected Stories','Anton P Chekhov','Russia','(1860-1904)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Sons and Lovers','DH Lawrence','England','(1885-1930)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Sound and the Fury','William Faulkner','United States','(1897-1962)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Sound of the Mountain','Yasunari Kawabata','Japan','(1899-1972)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Stranger','Albert Camus','France','(1913-1960)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Tale of Genji','Shikibu Murasaki','Japan','(c 1000)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Things Fall Apart','Chinua Achebe','Nigeria','(b. 1930)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Thousand and One Nights','Bradford Roy','India/Iran/Iraq/Egypt','(700-1500)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Tin Drum','Gunter Grass','Germany','(b.1927)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('To the Lighthouse','Virginia Woolf','England','(1882-1941)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('The Trial','Franz Kafka','Bohemia','(1883-1924)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Trilogy: Molloy,Malone Dies,The Unnamable','Samuel Beckett','Ireland','(1906-1989)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Ulysses','James Joyce','Ireland','(1882-1941)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('War and Peace','Leo Tolstoy','Russia','(1828-1910)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Wuthering Heights','Emily Brontë','England','(1818-1848)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));
INSERT INTO Book(Title, Author, Country, Published, UploadTime, TotalViews) VALUES('Zorba the Greek','Nikos Kazantzakis','Greece','(1883-1957)', DATEADD(DAY,FLOOR(RAND(9)*(10-1)+1),GETDATE()), FLOOR(RAND(9)*(10-1)+1));