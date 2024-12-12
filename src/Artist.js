class Artist{
    constructor(name, genre, birthYear, debutYear, monthlyStreams, numAlbums){
        this.name = name;
        this.genre = genre;
        this.birthYear = birthYear;
        this.debutYear = debutYear;
        this.monthlyStreams = monthlyStreams;
        this.numAlbums = numAlbums;
    }
}
const answerBank = [
    new Artist("Taylor Swift","Pop", 1989, 2006, 90, 11),
    new Artist("Drake", "Hip-hop", 1986, 2009, 73, 12),
    new Artist("Bad Bunny", "Latin Trap", 1994, 2013, 64, 7),
    new Artist("The Weeknd", "R&B", 1990, 2011, 117, 9),
    new Artist("Ed Sheeran", "Pop", 1991, 2011, 82, 7),
    new Artist("Ariana Grande", "Pop", 1993, 2013, 95, 7),
    new Artist("Eminem", "Hip-hop", 1972, 1996, 75, 12),
    new Artist("Justin Bieber", "Pop", 1994, 2010, 87, 6),
    new Artist("Post Malone", "Hip-hop/Rock", 1995, 2016, 70, 6),
    new Artist("Billie Eilish", "Pop", 2001, 2019, 103, 3),
    new Artist("Kendrick Lamar", "Hip-hop", 1987, 2011, 69, 6),
    new Artist("Shawn Mendes", "Pop", 1998, 2015, 49, 5),
    new Artist("Imagine Dragons", "Pop Rock", 2008, 2012, 60, 6),
    new Artist("Doja Cat", "Hip-hop/Pop", 1996, 2018, 50, 4),
    new Artist("Playboi Carti", "Hip-hop", 1995, 2017, 52, 3),
    new Artist("Bruno Mars", "Pop", 1985, 2010, 136, 3), //Stopped here
    new Artist("SZA", "R&B", 1989, 2017, 27, 2),
    new Artist("Harry Styles", "Pop", 1994, 2017, 24, 3),
    new Artist("Travis Scott", "Hip-hop", 1992, 2013, 23, 3),
    new Artist("Maroon 5", "Pop Rock", 1994, 2002, 22, 9),
    new Artist("Zayn Malik", "Pop", 1993, 2015, 21, 2),
    new Artist("Khalid", "R&B", 1998, 2016, 20, 4),
    new Artist("Future", "Hip-hop", 1983, 2011, 19, 9),
    new Artist("Miley Cyrus", "Pop", 1992, 2006, 18, 9),
    new Artist("Adele", "Pop/Soul", 1988, 2008, 17, 3),
    new Artist("The Chainsmokers", "Pop", 2012, 2014, 16, 3),
    new Artist("BTS", "K-pop", 1993, 2013, 15, 9),
    new Artist("Rihanna", "Pop/R&B", 1988, 2005, 14, 8),
    new Artist("Lil Baby", "Hip-hop", 1994, 2017, 13, 5),
    new Artist("Lana Del Rey", "Pop", 1985, 2012, 12, 7),
    new Artist("The Killers", "Rock", 2001, 2004, 11, 7),
    new Artist("Lil Uzi Vert", "Hip-hop", 1994, 2016, 10, 5),
    new Artist("Doja Cat", "Pop/Hip-hop", 1996, 2014, 9, 3),
    new Artist("Kanye West", "Hip-hop", 1977, 1999, 8, 11),
    new Artist("Celine Dion", "Pop", 1968, 1990, 7, 10),
    new Artist("Jonas Brothers", "Pop", 2005, 2006, 6, 5),
    new Artist("Beyoncé", "Pop/R&B", 1981, 1997, 5, 7),
    new Artist("Sia", "Pop", 1975, 2000, 4, 10),
    new Artist("Coldplay", "Rock", 1996, 2000, 3, 9),
    new Artist("Megan Thee Stallion", "Hip-hop", 1995, 2016, 2, 2),
    new Artist("Calvin Harris", "Electronic", 1984, 2007, 1, 8)
];
export {Artist, answerBank}