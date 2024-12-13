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
    new Artist("Post Malone", "Hip-hop", 1995, 2016, 70, 6),
    new Artist("Billie Eilish", "Pop", 2001, 2019, 103, 3),
    new Artist("Kendrick Lamar", "Hip-hop", 1987, 2011, 69, 6),
    new Artist("Shawn Mendes", "Pop", 1998, 2015, 49, 5),
    new Artist("Imagine Dragons", "Pop Rock", 2008, 2012, 60, 6),
    new Artist("Doja Cat", "Hip-hop", 1996, 2018, 50, 4),
    new Artist("Playboi Carti", "Hip-hop", 1995, 2017, 52, 3),
    new Artist("Bruno Mars", "Pop", 1985, 2010, 136, 3),
    new Artist("SZA", "R&B", 1989, 2017, 78, 2),
    new Artist("Harry Styles", "Pop", 1994, 2017, 48, 3),
    new Artist("Travis Scott", "Hip-hop", 1991, 2013, 71, 4),
    new Artist("Zayn Malik", "Pop", 1993, 2016, 27, 4),
    new Artist("Khalid", "R&B", 1998, 2017, 53, 3),
    new Artist("Future", "Hip-hop", 1983, 2012, 56, 9),
    new Artist("Miley Cyrus", "Pop", 1992, 2007, 56, 8),
    new Artist("Adele", "Pop", 1988, 2008, 59, 4),
    new Artist("Rihanna", "Pop", 1988, 2005, 83, 8),
    new Artist("Lil Baby", "Hip-hop", 1994, 2018, 13, 3),
    new Artist("Lana Del Rey", "Pop", 1985, 2012, 12, 9),
    new Artist("Lil Uzi Vert", "Hip-hop", 1995, 2015, 31, 4),
    new Artist("Kanye West", "Hip-hop", 1977, 2004, 67, 10),
    new Artist("Celine Dion", "Pop", 1968, 1981, 28, 27),
    new Artist("Beyoncé", "Pop", 1981, 2003, 5, 8),
    new Artist("Sia", "Pop", 1975, 1997, 80, 10),
    new Artist("Calvin Harris", "Electronic", 1984, 2007, 60, 7),
    new Artist("Juice WRLD", "Hip-hop", 1998, 2018, 38, 5),
    new Artist("Lady Gaga", "Pop", 1986, 2008, 110, 5),
    new Artist("Sam Smith", "Pop", 1992, 2014, 51, 4),
    new Artist("Metro Boomin", "Hip-hop", 1993, 2018, 50, 2),
    new Artist("J. Cole", "Hip-hop", 1985, 2011, 37, 6),
    new Artist("Shakira", "Pop", 1977, 1991, 61, 12),
    new Artist("Chris Brown", "R&B", 1989, 2005, 49, 11),
];
export {Artist, answerBank}