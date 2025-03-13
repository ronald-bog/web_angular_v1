import { Component } from '@angular/core';
import { NewsService } from 'src/app/services/news.service'
import { HttpClient } from '@angular/common/http';

interface NewsItem {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

@Component({
  selector: 'app-ciencia',
  templateUrl: './ciencia.component.html'
})
export class CienciaComponent {
  newsArray: NewsItem[] = [];
  type='science.json';

  constructor(private news: NewsService, private http: HttpClient) { }

  ngOnInit() {
    this.news.news(this.type).subscribe(data => {
      this.newsArray = data.articles;
    })
  }

  formatDate(dateString: string): string {
    const months = [
      "enero", "febrero", "marzo", "abril",
      "mayo", "junio", "julio", "agosto",
      "septiembre", "octubre", "noviembre", "diciembre"
    ];
    const [year, month, day] = dateString.split('-').map(Number);
    const formattedDay = day < 10 ? ` ${day}` : day.toString();
    const formattedDate = `${formattedDay} de ${months[month - 1]} ${year}`;
    return formattedDate;
  }
}
